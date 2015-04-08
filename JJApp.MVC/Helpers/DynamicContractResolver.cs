using Newtonsoft.Json.Serialization;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Newtonsoft.Json.Utilities;
using System.Globalization;
using System.Text;
namespace JJApp.MVC.Helpers
{
    public class DynamicContractResolver:Newtonsoft.Json.Serialization.DefaultContractResolver
    {
        private IList<string> _propertiesToSerialize = null;

        public DynamicContractResolver(IList<string> propertiesToSerialize)
        {
            _propertiesToSerialize = propertiesToSerialize;
        }

        protected override IList<JsonProperty> CreateProperties(Type type, Newtonsoft.Json.MemberSerialization memberSerialization)
        {
            IList<JsonProperty> properties = base.CreateProperties(type, memberSerialization);
            return properties.Where(p => _propertiesToSerialize.Contains(p.PropertyName)).ToList();
        }

        protected override string ResolvePropertyName(string propertyName)
        {
            return ToCamelCase(propertyName);
            //return base.ResolvePropertyName(propertyName);
        }

        public static string ToCamelCase(string s)
        {
            if (string.IsNullOrEmpty(s))
                return s;

            if (!char.IsUpper(s[0]))
                return s;

            StringBuilder sb = new StringBuilder();
            for (int i = 0; i < s.Length; i++)
            {
                bool hasNext = (i + 1 < s.Length);
                if ((i == 0 || !hasNext) || char.IsUpper(s[i + 1]))
                {
                    char lowerCase;
#if !(NETFX_CORE || PORTABLE)
                    lowerCase = char.ToLower(s[i], CultureInfo.InvariantCulture);
#else
                    lowerCase = char.ToLower(s[i]);
#endif

                    sb.Append(lowerCase);
                }
                else
                {
                    sb.Append(s.Substring(i));
                    break;
                }
            }

            return sb.ToString();
        }


    }
}