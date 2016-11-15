using perMap.Admin.DB;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace perMap.Admin.Dal
{
    public class UserDal
    {
        /// <summary>
        /// 验证登录用户
        /// </summary>
        /// <param name="userid"></param>
        /// <returns></returns>
        public Boolean CheckUserPassWord(string username,string password)
        {
            bool flag = false;
            DBConnect connect = new DBConnect();
            try
            {
                connect.Conn();
                DataSet ds = new DataSet();
                //string strSQL = "SELECT * FROM projectMap ORDER BY id DESC";
                string strSQL = "SELECT * FROM users where username='" + username + "' and password='" + password+"'";
                SqlCommand sqlCmd = new SqlCommand(strSQL, connect.sqlConn);
                SqlDataAdapter adapter = new SqlDataAdapter();
                adapter.SelectCommand = sqlCmd;
                adapter.Fill(ds);
                DataTable dt = ds.Tables[0];
                if (dt.Rows.Count > 0)
                    flag = true;
                connect.Disconn();
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
            return flag;
        }
    }
}