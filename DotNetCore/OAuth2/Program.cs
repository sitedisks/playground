using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace OAuth2
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");

            Uri authenticationUrl = new Uri("https://hello.sandbox.auspost.com.au/oauth2/ausujjr7T0v0TTilk3l5/v1/token");

            Dictionary<string, string> authenticationCredentials = new Dictionary<string, string>();
            authenticationCredentials.Add("grant_type", "client_credentials");
            authenticationCredentials.Add("scope", "https://api.payments.auspost.com.au/payhive/payments/read");

            Token token = GetToken(authenticationUrl, authenticationCredentials).Result;

            Console.WriteLine("access token: " + token.access_token);

            Console.ReadKey();
        }

        private static string Base64Encode(string plainText)
        {
            var plainTextBytes = Encoding.UTF8.GetBytes(plainText);
            return System.Convert.ToBase64String(plainTextBytes);
        }

        public static async Task<Token> GetToken(Uri authenticationUrl, Dictionary<string, string> authenticationCredentials)
        {
            HttpClient client = new HttpClient();

            var encodedPair = Base64Encode(String.Format("{0}:{1}", "0oaxb9i8P9vQdXTsn3l5", "0aBsGU3x1bc-UIF_vDBA2JzjpCPHjoCP7oI6jisp"));

            FormUrlEncodedContent content = new FormUrlEncodedContent(authenticationCredentials);

            HttpRequestMessage request = new HttpRequestMessage
            {
                Method = HttpMethod.Post,
                RequestUri = authenticationUrl,
                Content = content
            };
            request.Content.Headers.ContentType = new MediaTypeWithQualityHeaderValue("application/x-www-form-urlencoded") { CharSet = "UTF-8" };
            request.Headers.TryAddWithoutValidation("Authorization", String.Format("Basic {0}", encodedPair));


            HttpResponseMessage response = await client.SendAsync(request);

            if (response.StatusCode != System.Net.HttpStatusCode.OK)
            {
                string message = String.Format("POST failed. Received HTTP {0}", response.StatusCode);
                throw new ApplicationException(message);
            }

            string responseString = await response.Content.ReadAsStringAsync();

            Token token = JsonConvert.DeserializeObject<Token>(responseString);

            return token;
        }
    }
}
