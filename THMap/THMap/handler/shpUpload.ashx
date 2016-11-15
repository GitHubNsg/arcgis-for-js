<%@ WebHandler Language="C#" Class="shpUpload" %>
using System;
using System.Web;
using System.IO;
using System.Web.Script.Serialization;
using System.Collections;
using System.Collections.Generic;
using System.Web.Services;
using System.Web.Services.Protocols;
using System.Xml;
using System.Data;
using System.Text;
public class shpUpload : IHttpHandler
{
    public void ProcessRequest (HttpContext context) {
        string message = "";
        try
        { 
            int iTotal = context.Request.Files.Count;
            if (iTotal == 0)
                return;
            HttpPostedFile file = context.Request.Files[0];
            int len = file.ContentLength;//文件字节的大小
            if (len > 0 && !string.IsNullOrEmpty(file.FileName))
            {
                string parentPath="";
                if (file.FileName.Contains("csv"))
                {
                    parentPath = HttpContext.Current.Server.MapPath("~/uploads/");                   
                }
                else
                {
                    parentPath = HttpContext.Current.Server.MapPath("~/upload/");                       
                }
                if (!Directory.Exists(parentPath))
                {
                    Directory.CreateDirectory(parentPath);
                }
                file.SaveAs(System.IO.Path.Combine(parentPath, System.IO.Path.GetFileName(file.FileName)));
                string path = System.IO.Path.Combine(parentPath, System.IO.Path.GetFileName(file.FileName));
                //解压
                //GGFW.Models.map.ZipHelper.UnZip1(path, parentPath,"",false);
                message = "1";
                context.Response.Write(message);
            }
        }
        catch
        {
            context.Response.Write(message);
        }
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
