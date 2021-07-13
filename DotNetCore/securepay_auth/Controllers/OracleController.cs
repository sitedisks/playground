using Microsoft.AspNetCore.Mvc;
using Oci.Common;
using Oci.Common.Auth;
using Oci.ObjectstorageService;
using Oci.ObjectstorageService.Requests;
using Oci.ObjectstorageService.Responses;
using System;
using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace securepay_auth.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OracleController : ControllerBase
    {
        private static NLog.Logger logger = NLog.LogManager.GetCurrentClassLogger();

        // GET: api/<OracleController>
        [HttpGet]
        public async Task<ActionResult> Get()
        {
            //var provider = new ConfigFileAuthenticationDetailsProvider("DEFAULT");
            // http://oracle-blogs-test.compendiumblog.com/writing-an-oracle-cloud-net-application-using-vs-code-or-vs-codespaces
            var provider = new ConfigFileAuthenticationDetailsProvider("oci/config", "PWCLOUD");
            var osClient = new ObjectStorageClient(provider, new ClientConfiguration());

            try
            {

                await GetObjectExample(osClient);
                //await PutObjectExample(osClient);
            }
            catch (Exception e)
            {
                logger.Error($"Failed ObjectStorage example: {e.Message}");
            }
            finally
            {
                osClient.Dispose();
            }


            return Ok("Nice OCI");
        }

        public static async Task<GetObjectResponse> GetObjectExample(ObjectStorageClient osClient)
        {
            var getObjectObjectRequest = new GetObjectRequest()
            {
                BucketName = "bucket-vu-ebrochure",
                NamespaceName = "axqeoe7hpar7",
                ObjectName = "campus.jpg"
            };
            try
            {
                var response = await osClient.GetObject(getObjectObjectRequest);
                logger.Info($"Get Object is successful: " + response.ETag);

                var fileContents = new StreamReader(response.InputStream).ReadToEnd();
                logger.Info($"file contents: {fileContents}");

                return response;
            }
            catch (Exception e)
            {
                logger.Error($"Failed at GetObjectExample:\n{e}");
                throw;
            }
        }

        public static async Task<PutObjectResponse> PutObjectExample(ObjectStorageClient osClient)
        {
            var putObjectRequest = new PutObjectRequest()
            {
                BucketName = "bucket-vu-ebrochure",
                NamespaceName = "axqeoe7hpar7",
                ObjectName = "example.txt",
                PutObjectBody = GenerateStreamFromString("Hello World!!!!")
            };

            try
            {
                var response = await osClient.PutObject(putObjectRequest);
                logger.Info($"Put Object is successful: " + response.ETag);
                return response;
            }
            catch (Exception e)
            {
                logger.Error($"Failed at PutObjectExample:\n{e}");
                throw;
            }

        }

        public static Stream GenerateStreamFromString(string s)
        {
            var stream = new MemoryStream();
            var writer = new StreamWriter(stream);
            writer.Write(s);
            writer.Flush();
            stream.Position = 0;
            return stream;
        }

        // GET api/<OracleController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<OracleController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<OracleController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<OracleController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
