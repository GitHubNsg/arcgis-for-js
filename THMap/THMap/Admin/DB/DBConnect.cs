using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace perMap.Admin.DB
{
    public class DBConnect
    {
        public SqlConnection sqlConn;
        public DBConnect()
        {
            sqlConn = new SqlConnection();
        }
        public string Conn()
        {
            string message = "";
            string conStr = ConfigurationManager.ConnectionStrings["sqlConnectionString"].ToString();
            sqlConn.ConnectionString = conStr;
            if (sqlConn.State == System.Data.ConnectionState.Closed)
            {
                try
                {
                    sqlConn.Open();
                    message = "连接成功";
                }
                catch (Exception ex)
                {
                    //MessageBox.Show(ex.Message);
                    message = ex.Message;
                }
            }
            return message;
        }

        public void Disconn()
        {
            if (sqlConn.State == System.Data.ConnectionState.Open)
            {
                sqlConn.Close();
            }
        }
    }
}