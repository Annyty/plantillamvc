using JJApp.MVC.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace JJApp.MVC.ViewModels
{
    public class ViewModelBase
    {

        private bool? _canEdit = null;
        private bool? _canDelete = null;
        private bool? _canAdd = null;

        private RoleEvaluator _evaluator = new RoleEvaluator();

        public bool CanAdd
        {
            get
            {
                if (!this._canAdd.HasValue)
                {
                    this._canAdd = this._evaluator.CanAdd;
                }
                return this._canAdd.Value;
            }
        }

        public bool CanEdit
        {
            get
            {
                if (!this._canEdit.HasValue)
                {
                    this._canEdit = this._evaluator.CanEdit;
                }
                return this._canEdit.Value;
            }
        }


        public bool CanDelete
        {
            get
            {
                if (!this._canDelete.HasValue)
                {
                    this._canDelete = this._evaluator.CanDelete;
                }
                return this._canDelete.Value;
            }
        }

    }

}