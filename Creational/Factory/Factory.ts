/**
The Factory Method design pattern solves problems like: [2]

How can an object be created so that subclasses can redefine which class to instantiate?
How can a class defer instantiation to subclasses?
The Factory Method design pattern describes how to solve such problems:

Define a separate operation (factory method) for creating an object.
Create an object by calling a factory method. 
*/

class GamePiece
{
    constructor() {
        console.log("Game piece created")
    }
}

class Knight extends GamePiece
{
    constructor() {
        super();
        console.log("Knight");
    }
}

class Villant extends GamePiece
{
    constructor() {
        super();
        console.log("Villant");
    }
}

class King extends GamePiece
{
    constructor() {
        super();
        console.log("King");
    }
}

enum GamePieceType
{
    Knight, Villant, King
}

/// <summary>
/// Implementation of Factory - Used to create objects.
/// </summary>
class GamePieceFactory
{
    static createGamePiece(type: GamePieceType): GamePiece 
    {
        switch (type)
        {
            case GamePieceType.King:
                return new King();
            case GamePieceType.Knight:
                return new Knight();
            case GamePieceType.Villant:
                return new Villant();                
            default:
                throw "Error";
        }
    }
}

let knight: GamePiece = GamePieceFactory.createGamePiece(GamePieceType.Knight);
let king: GamePiece = GamePieceFactory.createGamePiece(GamePieceType.King); 
let villant: GamePiece = GamePieceFactory.createGamePiece(GamePieceType.Villant); 