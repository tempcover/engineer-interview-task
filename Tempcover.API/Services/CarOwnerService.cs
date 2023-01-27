using Tempcover.API.Data;

namespace Tempcover.API.Services;

public class CarOwnerService
{
    public List<CarOwner> GetAllCarOwners()
    {
        var carOwnerRepository = new CarOwnerRepository();
        var carOwnerList = carOwnerRepository.GetAllCarOwners();

        return carOwnerList;
    }
}
