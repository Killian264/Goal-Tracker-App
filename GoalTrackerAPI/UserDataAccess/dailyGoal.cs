using Newtonsoft.Json;
//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace UserDataAccess
{
    using System;
    using System.Collections.Generic;

    public partial class dailyGoal
    {
        public string id { get; set; }
        [JsonIgnore]
        public string userEmail { get; set; }
        public string title { get; set; }
        public string snippit { get; set; }
        public System.DateTime startDate { get; set; }
        public System.DateTime endDate { get; set; }
        public int daysChecked { get; set; }
        public System.DateTime lastDayUpdated { get; set; }
        public bool[] weeklyChecked { get; set; }
        [JsonIgnore]
        public int trueFalseArr { get; set; }
        [JsonIgnore]
        public virtual user user { get; set; }
    }
}