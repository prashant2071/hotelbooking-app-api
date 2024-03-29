const nextHandlers = require("../utilities/nextHandlers");
const hotelModel = require("../models/hotelModel");
const { successMsg } = require("../utilities/success");

//GETALL
const getAllHotels = async (req, res, next) => {
  console.log("hello hotels label");
  const { id } = req.params;
  try {
    const allHotels = await hotelModel.find();
    if (!allHotels[0])
      return next(nextHandlers("No hotels found!", { status: 404 }));

    res.json({
      ...successMsg,
      message: "fetched all hotel successfully",
      data: allHotels,
    });
  } catch (err) {
    next(nextHandlers("hotel fetching faild", err));
  }
};

//GET
const getHotelById = async (req, res, next) => {
  const { id } = req.params;
  console.log("the id data is", id);
  try {
    const getHotel = await hotelModel.findById(req.params.id);
    console.log("the hotel data is", getHotel);
    if (!getHotel)
      return next(nextHandlers("No hotel found!", { status: 404 }));

    res.json({
      ...successMsg,
      message: "hotel found successfully",
      data: getHotel,
    });
  } catch (err) {
    next(nextHandlers("failed to find hotel", err));
  }
};

//CREATE
const createHotel = async (req, res, next) => {
  const Hotel = new hotelModel(req.body);
  try {
    const savedHotel = await Hotel.save();
    res.json({
      ...successMsg,
      message: "hotel created successfully",
      data: savedHotel,
    });
  } catch (err) {
    if (err.code === 11000) {
      next(nextHandlers("duplicate data already exist", err));
    } else {
      next(nextHandlers("hotel creation failed", err));
    }
  }
};
//UPDATE
const updateHotel = async (req, res, next) => {
  const { id } = req.params;
  try {
    const updatedHotel = await hotelModel.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );
    if (!updatedHotel)
      return next(nextHandlers("No hotel found!", { status: 404 }));
    res.json({
      ...successMsg,
      message: "hotel updated successfully",
      data: updatedHotel,
    });
  } catch (err) {
    next(nextHandlers("hotel update failed!!", err));
  }
};

//DELETE
const deleteHotel = async (req, res, next) => {
  const { id } = req.params;
  try {
    const deletedHotel = await hotelModel.findByIdAndDelete(id, {
      $set: req.body,
    });
    if (!deletedHotel)
      return next(nextHandlers("No hotel found!", { status: 404 }));
    res.json({
      ...successMsg,
      message: "hotel deleted successfully",
      data: deletedHotel,
    });
  } catch (err) {
    next(nextHandlers("hotel deletion failed!!", err));
  }
};
const countByCity = async (req, res, next) => {
  const cities = req.query.city.split(",");
  console.log(cities);
  try {
    const list = await Promise.all(
      cities.map((city) => {
        return hotelModel.countDocuments({ city: city });
      })
    );
    res.json({
      ...successMsg,
      message: "get hotel room by cities",
      data: list,
    });
  } catch (err) {
    next(nextHandlers("failed to list city", err));
  }
};
const countByType = async (req, res, next) => {
  try {
    const hotelCount = await hotelModel.countDocuments({ type: "hotel" });
    const apartmentCount = await hotelModel.countDocuments({ type: "apartment" });
    const villaCount = await hotelModel.countDocuments({ type: "resort" });
    const cabinCount = await hotelModel.countDocuments({ type: "villa" });
    const resortCount = await hotelModel.countDocuments({ type: "cabin" });

    res.json({
      ...successMsg,
      message: "get hotel room by cities",
      data: [
        { type: "hotel", count: hotelCount },
        { type: "apartment", count: apartmentCount },
        { type: "villa", count: villaCount },
        { type: "resort", count: resortCount },
        { type: "cabin", count: cabinCount }
      ],
    });
  } catch (err) {
    next(nextHandlers("failed to list city", err));
  }
};

module.exports = {
  getAllHotels,
  getHotelById,
  createHotel,
  updateHotel,
  deleteHotel,
  countByCity,
  countByType,
};
