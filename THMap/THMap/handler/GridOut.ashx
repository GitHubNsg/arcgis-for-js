<%@ WebHandler Language="C#" Class="GridOut" %>

using System; 
using System.Web; 
using System.Collections; 
using System.Collections.Generic; 
using System.Web.Script.Serialization; 
using System.IO; 
using System.Data; 
using System.Xml; 
using System.Xml.Schema; 
using System.Text; 
using System.Net; 
using System.Web.SessionState; 


public class GridOut : IHttpHandler
{
   
    
    public void ProcessRequest(HttpContext context)
    {

        string data = HttpUtility.UrlDecode(context.Request.Params["data"]);
        //string data = HttpUtility.UrlDecode(context.Request.Form["data"]);
        string filename = context.Request.Params["filename"];
        filename = HttpUtility.UrlDecode(filename);
        string file = filename+".csv";
        context.Response.AppendHeader("Content-Disposition", "attachment; filename=" + HttpUtility.UrlPathEncode(file));
        context.Response.ContentType = "text/plain";
        context.Response.ContentEncoding = Encoding.GetEncoding("GB2312");

        context.Response.Write(data);
        //context.Response.Flush();
    }

    public bool IsReusable
    {
        get
        {
            return false;
        }
    } 


}