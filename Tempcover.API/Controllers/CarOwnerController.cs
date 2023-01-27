using Microsoft.AspNetCore.Mvc;
using Tempcover.API.Services;

namespace Tempcover.API.Controllers;

[ApiController]
[Route("[controller]")]
public class CarOwnerController : ControllerBase
{

    [HttpGet(Name = "GetCarOwner")]
    public List<CarOwner> GetCarOwners()
    {
        var carOwnerService = new CarOwnerService();
        var carOwnerList = carOwnerService.GetAllCarOwners();

        return carOwnerList;
    }
}
