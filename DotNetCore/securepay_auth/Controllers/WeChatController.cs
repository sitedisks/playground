using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using securepay_auth.Model;
using System;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;

namespace securepay_auth.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class WeChatController : ControllerBase
    {
        private IConfiguration configuration;
        private static readonly HttpClient client = new HttpClient();

        public WeChatController(IConfiguration iconfig)
        {
            configuration = iconfig;
        }

        [HttpPost]
        public async Task<ActionResult> CreatePay(Payment payment)
        {
            String payendpoint = configuration.GetValue<string>("SecurePay:Endpoint") + configuration.GetValue<string>("SecurePay:WeChatAPI");
            String merchantcode = configuration.GetValue<string>("SecurePay:MerchantCode");

            var authValue = new AuthenticationHeaderValue("Bearer", payment.AccessToken);

            var IdempotencyKey = Guid.NewGuid();

            client.DefaultRequestHeaders.Authorization = authValue;
            client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));

            var wechatModel = new WeChatModel
            {
                merchantCode = merchantcode,
                ip = Request.HttpContext.Connection.RemoteIpAddress.ToString(),
                amount = payment.Amount,
                orderId = IdempotencyKey.ToString(),
                orderDescription = payment.Description,
                paymentChannel = "InBrowser",
                redirectUrls = new RedirectUrls
                {
                    successUrl = payment.SuccessUrl
                }
            };

            string json = JsonConvert.SerializeObject(wechatModel);
            var stringContent = new StringContent(json, Encoding.UTF8, "application/json");

            var response = await client.PostAsync(payendpoint, stringContent);
            var responseString = await response.Content.ReadAsStringAsync();

            return Ok(responseString);
        }
    }
}