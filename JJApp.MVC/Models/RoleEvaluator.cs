using System.Web.Security;

namespace JJApp.MVC.Models
{
    public class RoleEvaluator
    {

        public bool CanAdd
        {
            get
            {
                return Roles.IsUserInRole("FuncionarioFinanciero") ||
                    Roles.IsUserInRole("FuncionarioTecnico") ||
                    Roles.IsUserInRole("FuncionarioSocial");
                
            }
        }

        public bool CanEdit
        {
            get
            {
                return Roles.IsUserInRole("FuncionarioFinanciero") ||
                    Roles.IsUserInRole("FuncionarioTecnico") ||
                    Roles.IsUserInRole("FuncionarioSocial");
            }
        }


        public bool CanDelete
        {
            get
            {
                return Roles.IsUserInRole("FuncionarioFinanciero") ||
                     Roles.IsUserInRole("FuncionarioTecnico") ||
                     Roles.IsUserInRole("FuncionarioSocial");
            }
        }

    }
}