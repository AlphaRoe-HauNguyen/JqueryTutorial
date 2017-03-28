using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Web;

namespace RequestHelper.Models
{
    public class RequestContent
    {
        public string Url { get; set; }
        public IDictionary<string, string> Headers { get; set; }
        public string Content { get; set; }
        public string DataType { get; set; }
        public HttpMethod Method { get; set; }
    }
}