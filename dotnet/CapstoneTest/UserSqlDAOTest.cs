using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Transactions;
using System.Data.SqlClient;
using Capstone.DAO;
using Capstone.Models;

namespace CapstoneTest
{
    [TestClass]
    public class UserSqlDAOTest : SqlDaoTestBase
    {
        [TestMethod]
        public void GetUserTest()
        {
            UserSqlDAO access = new UserSqlDAO(ConnectionString);

            User user = access.GetUser("notauser");

            Assert.IsNotNull(user);

            Assert.AreEqual("user", user.Role);
        }

        [TestMethod]
        public void AddUserTest()
        {
            UserSqlDAO access = new UserSqlDAO(ConnectionString);

            User user = access.AddUser("anotheruser", "password", "admin");

            Assert.IsNotNull(user);

            Assert.AreEqual("admin", user.Role);

            user = access.GetUser("anotheruser");

            Assert.IsNotNull(user);

            Assert.AreEqual("admin", user.Role);
        }
    }
}
