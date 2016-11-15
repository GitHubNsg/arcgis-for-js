using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace perMap.Admin.Model
{
    public class UserModel
    {
        private string _userid;
        private string _username;
        private string _password;
        private string _phone;
        private string _department;
        /// <summary>
        /// 用户编号
        /// </summary>
        public string USERID
        {
            set { _userid = value; }
            get { return _userid; }
        }
        /// <summary>
        /// 用户登录名
        /// </summary>
        public string USERNAME
        {
            set { _username = value; }
            get { return _username; }
        }
        /// <summary>
        /// 用户密码
        /// </summary>
        public string PASSWORD
        {
            set { _password = value; }
            get { return _password; }
        }
        /// <summary>
        /// 用户电话
        /// </summary>
        public string PHONE
        {
            set { _phone = value; }
            get { return _phone; }
        }
        /// <summary>
        /// 用户所属部门
        /// </summary>
        public string DEPARTMENT
        {
            set { _department = value; }
            get { return _department; }
        }



    }
}