using perMap.Admin.Dal;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace perMap.Admin.Bll
{
    public class UserBll
    {
        private readonly static UserDal userDAL = new UserDal();
        /// <summary>
        /// 验证登录用户
        /// </summary>
        /// <param name="userid"></param>
        /// <returns></returns>
        public Boolean CheckUserPassWord(string username, string password)
        {
            return userDAL.CheckUserPassWord(username, password);
        }
    }
}