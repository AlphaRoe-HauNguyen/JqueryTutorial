using RequestHelper.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;

namespace RequestHelper.Controllers
{
    public class RequestController : ApiController
    {
        HttpClient client;
        HttpRequestMessage request;
        HttpResponseMessage response;

        [HttpGet]
        [Route("test")]
        public String TestApi()
        {
            return "Connected";
        }

        [HttpPost]
        [Route("request")]
        public async Task<Object> ExecuteRequest([FromBody] RequestContent reqContent)
        {
            this.client = new HttpClient();
            string encodedUrl = HttpUtility.HtmlEncode(reqContent.Url);
            this.request = new HttpRequestMessage(reqContent.Method, encodedUrl);
            foreach (var item in reqContent.Headers) { this.request.Headers.Add(item.Key, item.Value); }
            response = await client.SendAsync(this.request);
            return await response.Content.ReadAsStringAsync();
        }

    }
}
