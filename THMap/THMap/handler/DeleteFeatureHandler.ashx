<%@ WebHandler Language="C#" Class="DeleteFeatureHandler" %>

using System;
using System.Web;
using System.Collections;
using System.Collections.Generic;
using System.Web.Script.Serialization;
//using DCI.Encrypt;

public class DeleteFeatureHandler : IHttpHandler, System.Web.SessionState.IReadOnlySessionState
{
    public void ProcessRequest (HttpContext context) {
        string featureserverurl = context.Request.Params["featureserverurl"];
        string id = context.Request.Params["OBJECTID"];
        string param = "where=OBJECTID=" + id + "&f=json";
        string url = featureserverurl + "/deleteFeatures";
        string ret = PostDataToUrl(param, url, "application/x-www-form-urlencoded");

        context.Response.Write(ret);
        context.Response.End();
    }

    public bool IsReusable {
        get {
            return false;
        }
    }
    public static string PostDataToUrl(string data, string url, string contentType)
    {
        byte[] bytes = System.Text.Encoding.UTF8.GetBytes(data);
        return PostDataToUrl(bytes, url, contentType);
    }

    public static string PostDataToUrl(byte[] data, string url, string contentType)
    {
        #region 创建httpWebRequest对象
        System.Net.HttpWebRequest httpRequest = (System.Net.HttpWebRequest)System.Net.HttpWebRequest.Create(url);

        if (httpRequest == null)
        {
            throw new ApplicationException(string.Format("Invalid url string: {0}", url));
        }
        #endregion

        #region 填充httpWebRequest的基本信息
        //httpRequest.UserAgent = "Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.2; .NET CLR 1.1.4322; .NET CLR 2.0.50727)";
        httpRequest.ContentType = contentType;
        httpRequest.Method = "POST";
        string Referer = System.Configuration.ConfigurationManager.AppSettings["Referer"];
        httpRequest.Referer = Referer;
        #endregion

        #region 填充要post的内容
        httpRequest.ContentLength = data.Length;
        System.IO.Stream requestStream = httpRequest.GetRequestStream();
        requestStream.Write(data, 0, data.Length);
        requestStream.Close();
        #endregion

        #region 发送post请求到服务器并读取服务器返回信息
        System.IO.Stream responseStream;
        try
        {
            responseStream = httpRequest.GetResponse().GetResponseStream();
        }
        catch (Exception e)
        {
            // log error
            Console.WriteLine(string.Format("POST操作发生异常：{0}", e.Message));
            throw e;
        }
        #endregion

        #region 读取服务器返回信息
        string stringResponse = string.Empty;
        using (System.IO.StreamReader responseReader =
            new System.IO.StreamReader(responseStream, System.Text.Encoding.UTF8))
        {
            stringResponse = responseReader.ReadToEnd();
        }
        responseStream.Close();
        #endregion

        return stringResponse;
    }     
    
    

}