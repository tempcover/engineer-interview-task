namespace Tempcover.API.Data;

public class CarOwnerRepository
{
    public List<CarOwner> GetAllCarOwners()
    {
        var carOwnerList = new List<CarOwner>
            {
                new CarOwner
                {
                    CarOwnerName = "Josh",
                    CarMakeModelAndReg= "Mini Cooper A1"
                }
            };

        return carOwnerList;
    }
}
