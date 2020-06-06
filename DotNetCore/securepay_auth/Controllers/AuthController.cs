using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using securepay_auth.Model;
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;

namespace securepay_auth.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private IConfiguration configuration;
        private static readonly HttpClient client = new HttpClient();
        public AuthController(IConfiguration iconfig)
        {
            configuration = iconfig;
        }

        [HttpGet]
        public async Task<ActionResult> Index()
        {
            String authendpoint = configuration.GetValue<string>("SecurePay:AuthEndpoint");
            String username = configuration.GetValue<string>("SecurePay:ClientID");
            String password = configuration.GetValue<string>("SecurePay:ClientSecret");
            var authValue = new AuthenticationHeaderValue("Basic", Convert.ToBase64String(System.Text.Encoding.UTF8.GetBytes($"{username}:{password}")));

            client.DefaultRequestHeaders.Authorization = authValue;

            var values = new Dictionary<string, string>
                {
                    { "grant_type", "client_credentials" },
                    { "scope", "https://api.payments.auspost.com.au/payhive/payments/read https://api.payments.auspost.com.au/payhive/payments/write https://api.payments.auspost.com.au/payhive/payment-instruments/read https://api.payments.auspost.com.au/payhive/payment-instruments/write" }
                };

            var content = new FormUrlEncodedContent(values);
            content.Headers.ContentType = new MediaTypeHeaderValue("application/x-www-form-urlencoded");

            var response = await client.PostAsync(authendpoint, content);

            var responseString = await response.Content.ReadAsStringAsync();
            return Ok(responseString);
        }

        [HttpPost]
        public async Task<ActionResult> Payment(Payment payment)
        {

            //var userIp = HttpContext.Request.Host;
            var _IP = "RemoteIp:" + Request.HttpContext.Connection.RemoteIpAddress.ToString() + " - LocalIpAddress:" +
                  Request.HttpContext.Connection.LocalIpAddress;

            String payendpoint = configuration.GetValue<string>("SecurePay:Endpoint") + configuration.GetValue<string>("SecurePay:PayAPI");
            String merchantcode = configuration.GetValue<string>("SecurePay:MerchantCode");

            var authValue = new AuthenticationHeaderValue("Bearer", payment.AccessToken);

            var authValueString = authValue.ToString();

            var IdempotencyKey = Guid.NewGuid();

            client.DefaultRequestHeaders.Authorization = authValue;
            client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
            client.DefaultRequestHeaders.Add("Idempotency-Key", IdempotencyKey.ToString());

            var payModel = new PayModel
            {
                merchantCode = merchantcode,
                amount = payment.Amount,
                token = payment.Token,
                ip = Request.HttpContext.Connection.RemoteIpAddress.ToString()
            };
            string json = JsonConvert.SerializeObject(payModel);
            var stringContent = new StringContent(json, Encoding.UTF8, "application/json");

            var response = await client.PostAsync(payendpoint, stringContent);
            var responseString = await response.Content.ReadAsStringAsync();

            return Ok(responseString);
        }

    }
}