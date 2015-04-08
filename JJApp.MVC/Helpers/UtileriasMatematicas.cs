using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace JJApp.MVC
{
    public static class UtileriasMatematicas
    {
               
        public static int Max(int x, int y)
        {
            return Math.Max(x, y);
        }

        public static int Max(int x, int y, int z)
        {
            // Or inline it as x < y ? (y < z ? z : y) : (x < z ? z : x);
            // Time it before micro-optimizing though!
            return Math.Max(x, Math.Max(y, z));
        }

        public static int Max(int w, int x, int y, int z)
        {
            return Math.Max(w, Math.Max(x, Math.Max(y, z)));
        }

        public static int Max(params int[] values)
        {
            return Enumerable.Max(values);
        }
        

    }
}