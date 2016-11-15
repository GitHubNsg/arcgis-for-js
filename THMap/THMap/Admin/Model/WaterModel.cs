using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace perMap.Admin.Model
{
    public class WaterModel
    {
        private string _id;//水源编号
        public string id
        {
            set { _id = value; }
            get { return _id; }
        }
        private string _name;//水源名称
        public string name
        {
            set { _name = value; }
            get { return _name; }
        }
        private string _pipeunit;//所属管网
        public string pipeunit
        {
            set { _pipeunit = value; }
            get { return _pipeunit; }
        }
        private string _placement;//放置形式
        public string placement
        {
            set { _placement = value; }
            get { return _placement; }
        }
        private string _pipeform;//管网形式
        public string pipeform
        {
            set { _pipeform = value; }
            get { return _pipeform; }
        }
        private string _status;//可用状态
        public string status
        {
            set { _status = value; }
            get { return _status; }
        }
        private string _pipestress;//可用状态
        public string pipestress
        {
            set { _pipestress = value; }
            get { return _pipestress; }
        }
        private string _adddress;//地址
        public string adddress
        {
            set { _adddress = value; }
            get { return _adddress; }
        }
        private string _route;//所属路段
        public string route
        {
            set { _route = value; }
            get { return _route; }
        }
        private string _agency;//管辖机构
        public string agency
        {
            set { _agency = value; }
            get { return _agency; }
        }
        private string _waterform;//取水形式
        public string waterform
        {
            set { _waterform = value; }
            get { return _waterform; }
        }
        private string _pipedn;//管网直径
        public string pipedn
        {
            set { _pipedn = value; }
            get { return _pipedn; }
        }
        private string _waterdynamic;//水源动态
        public string waterdynamic
        {
            set { _waterdynamic = value; }
            get { return _waterdynamic; }
        }
        private string _belong;//水源动态
        public string belong
        {
            set { _belong = value; }
            get { return _belong; }
        }
        private string _waterunit;//水源动态
        public string waterunit
        {
            set { _waterunit = value; }
            get { return _waterunit; }
        }
        private string _waterinterface;//接口形式
        public string waterinterface
        {
            set { _waterinterface = value; }
            get { return _waterinterface; }
        }
        private string _auditstate;//审核状态
        public string auditstate
        {
            set { _auditstate = value; }
            get { return _auditstate; }
        }
        private string _phone;//联系方式
        public string phone
        {
            set { _phone = value; }
            get { return _phone; }
        }
        private DateTime _time;//建造日期
        public DateTime time
        {
            set { _time = value; }
            get { return _time; }
        }
        private string _note;//备注
        public string note
        {
            set { _note = value; }
            get { return _note; }
        }
        private string _img;//图片来源
        public string img
        {
            set { _img = value; }
            get { return _img; }
        }
        private string _type;//标注图标类型
        public string type
        {
            set { _type = value; }
            get { return _type; }
        }


    }
}