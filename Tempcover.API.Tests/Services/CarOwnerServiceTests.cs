using Tempcover.API.Services;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace Tempcover.API.Tests.Services;

[TestClass]
public class CarOwnerServiceTests
{
    [TestMethod]
    public void TestCarOwners()
    {
        // Arrange
        CarOwnerService carOwnerService = new CarOwnerService();

        // Act
        var result = carOwnerService.GetAllCarOwners();

        // Assert
        Assert.IsNotNull(result);
        // Should be testing more than just "is is not null" 
        // Should be testing more methods down and up the stack
    }
}
