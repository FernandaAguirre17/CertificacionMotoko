import Array "mo:base/Array";
import Nat "mo:base/Nat";

actor VapesList {
  type Vape = {
    id : Nat;
    taste : Text;
    size : Text;
    brand : Text;
    price : Text;
  };

  var Vapes : [Vape] = [{
    id = 1;
    brand = "i pad"; 
    size = "Grande";
    price = "400";
    taste = "Naranja";
  }];

  public func addVape(brand : Text, taste : Text, size : Text, price : Text) : async Bool {
    let newid = Array.size(Vapes) + 1;
    let newVape = {
      id = newid;
      brand = brand;
      size = size;
      price = price;
      taste = taste;
    };

    Vapes := Array.append<Vape>(Vapes, [newVape]);
    return true;

  };

  public func getAllVapes() : async [Vape] {
    return Vapes;
  };

  public func getVapeById(id : Nat) : async ?Vape {
    return Array.find<Vape>(Vapes, func(v) { v.id == id });
  };

  public func updateVape(id:Nat, brand : Text, taste : Text, size : Text, price : Text) : async Bool {
    let VapeToUpdate = Array.find<Vape>(Vapes, func(Vape) { Vape.id == id });

    switch (VapeToUpdate) {
      case (null) { return false };
      case (?VapeToUpdate) {
        let updatedVape = {
          id = 1;
          size = size;
          price = price;
          taste = taste;
          brand = brand;
        };
        Vapes := Array.map<Vape, Vape>(Vapes, func(v) { if (v.id == id) { updatedVape } else { v } });
        return true;
      };
    };
  };

  public func deleteVape(id : Nat) : async Bool {
    let Vape = Array.find<Vape>(Vapes, func(Vape) { Vape.id == id });
    if (Vape != null) {
      Vapes := Array.filter<Vape>(Vapes, func(Vape) { Vape.id != id });
      return true;
    } else {
      return false;
    };
  };
};
