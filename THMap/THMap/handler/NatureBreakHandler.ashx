<%@ WebHandler Language="C#" Class="NatureBreakHandler" %>

using System;
using System.Web;
using Com.wl.Algorithm;

public class NatureBreakHandler : IHttpHandler {
    
    public void ProcessRequest (HttpContext context) {
        string numStr = context.Request.QueryString["numStr"];
        string breaks = context.Request.QueryString["breaks"];
        int brks = Convert.ToInt32(breaks);
        
        string[] numStrArr = numStr.Split(',');

        int[] a = new int[numStrArr.Length];
        for (int i = 0; i < numStrArr.Length; i++)
        {
            a[i] = Convert.ToInt32(numStrArr[i]);
        }
        
        //待间断的数据集
        //int[] a = { 2024, 2231, 1451, 2748, 2311, 5117, 3957, 1368, 4276, 2516, 1304, 1245, 4358, 3996, 1010, 3139, 912, 989, 1108, 683, 524 };

        //NaturalBreak处理类
        NaturalBreak natural = new NaturalBreak();

        //执行方法
        //参数一：数据集；参数二：分类数
        //4个分类有3个间断点，m个分类有m-1个间断点
        natural.ExcuteBreak(a, brks);

        //拟合度GVF = (SDAM -SDCM )/SDAM 。（总体方差 -类间方差）/总体方差
        //评价分类结果的优劣
        //double gvf = natural.Gvf;

        //int[] sort = natural.SortNums;
        //Console.WriteLine("asc排序后数据集为:");
        //for (int i = 0; i < a.Length; i++) Console.Write(sort[i] + 1 + " ");
        //Console.WriteLine();


        //Console.WriteLine("间断点为");
        //for (int i = 0; i < natural.Breaks.Count; i++) Console.Write(natural.Breaks[i] + 1 + " ");
        //Console.WriteLine();


        //Console.WriteLine("组合为");
        int[] combine = natural.GetCombine();
        string result = "";
        for (int i = 0; i < combine.Length; i++)
        {
            result = result + Convert.ToString(combine[i]) + ",";
        }
        
        if (result.Length > 0)
        {
            result = result.Substring(0, result.Length - 1);
        }
        
        //Console.Write(combine[i] + " ");

        //Console.WriteLine();


        //Console.WriteLine("拟合度为" + gvf);

        //Console.ReadLine();
        context.Response.ContentType = "text/plain";
        context.Response.Write(result);
    }
 
    public bool IsReusable {
        get {
            return false;
        }
    }

}