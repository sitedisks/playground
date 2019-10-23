using System;
using System.IO;
using System.Collections.Generic;
using Microsoft.Extensions.Configuration;
using System.Threading.Tasks;
using Microsoft.Azure.Storage;
using Microsoft.Azure.Storage.Blob;

namespace myApp3
{
    class Program
    {
        static void Main(string[] args)
        {

            Console.WriteLine("Current time: " + DateTime.Now);
            Console.WriteLine("Azure Blob Storage - .NET quickstart sample\n");
            ProcessAsync().GetAwaiter().GetResult();

            Console.WriteLine("Press any key to exit the sample application.");
            Console.ReadLine();
        }

        private static async Task ProcessAsync()
        {
            var builder = new ConfigurationBuilder()
                            .SetBasePath(Directory.GetCurrentDirectory())
                            .AddJsonFile("appsettings.json");
            IConfiguration config = builder.Build();
            string connString = config.GetConnectionString("container_storagepeter8");

            string storageConnectionString = connString;
            CloudStorageAccount storageAccount;

            if (CloudStorageAccount.TryParse(storageConnectionString, out storageAccount))
            {
                CloudBlobClient cloudBlobClient = storageAccount.CreateCloudBlobClient();
                var containers = await ListContainersAsync(cloudBlobClient);
                foreach (var container in containers)
                {
                    Console.WriteLine("Container: " + container.Name);
                    Console.WriteLine("Blobs:");
                    var blobs = await ListBlobAsync(container);
                    foreach (IListBlobItem item in blobs)
                    {
                        Console.WriteLine(item.Uri);
                    }
                }

            }
            else
            {
                Console.WriteLine(
                        "A connection string has not been defined in the system environment variables. " +
                        "Add an environment variable named 'CONNECT_STR' with your storage " +
                        "connection string as a value.");
                Console.WriteLine("Press any key to exit the application.");
                Console.ReadLine();

            }
        }

        private static async Task<IEnumerable<IListBlobItem>> ListBlobAsync(CloudBlobContainer container)
        {
            BlobContinuationToken continuationToken = null;
            var blobs = new List<IListBlobItem>();

            do
            {
                BlobResultSegment response = await container.ListBlobsSegmentedAsync(null, continuationToken);
                continuationToken = response.ContinuationToken;
                blobs.AddRange(response.Results);

            } while (continuationToken != null); // Loop while the continuation token is not null.

            return blobs;
        }

        private static async Task<IEnumerable<CloudBlobContainer>> ListContainersAsync(CloudBlobClient cloudBlobClient)
        {
            BlobContinuationToken continuationToken = null;
            var containers = new List<CloudBlobContainer>();

            do
            {
                ContainerResultSegment response = await cloudBlobClient.ListContainersSegmentedAsync(continuationToken);
                continuationToken = response.ContinuationToken;
                containers.AddRange(response.Results);

            } while (continuationToken != null);

            return containers;
        }
    }
}
