using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Text;
using perMap.Admin.Bll;

namespace perMap.handler
{
    /// <summary>
    /// Users 的摘要说明
    /// </summary>
    public class Users : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            string message = "";
            context.Response.ContentType = "text/plain";
            context.Response.ContentEncoding = Encoding.GetEncoding("UTF-8");
            string username = context.Request.Params["username"].ToString();
            string password = context.Request.Params["password"].ToString(); ;
            UserBll user = new UserBll();
            if (user.CheckUserPassWord(username, password))
            {
                message = "1";
            }
            else
            {
                message = "0";
            }
            context.Response.Write(message);
            context.Response.End();
        }

        public bool IsReusable
        {
            get
            {
                return false;
            }
        }
    }
}