// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract PersonalData {
    struct Person {
        string firstName;
        string lastName;
        uint256 birthYear;
        string nationality;
        string postalAddress;
    }

    mapping(address => Person) private persons;

    function saveData(
        string memory _firstName,
        string memory _lastName,
        uint256 _birthYear,
        string memory _nationality,
        string memory _postalAddress
    ) public {
        persons[msg.sender] = Person(
            _firstName,
            _lastName,
            _birthYear,
            _nationality,
            _postalAddress
        );
    }

    function updateData(
        string memory _firstName,
        string memory _lastName,
        uint256 _birthYear,
        string memory _nationality,
        string memory _postalAddress
    ) public {
        persons[msg.sender] = Person(
            _firstName,
            _lastName,
            _birthYear,
            _nationality,
            _postalAddress
        );
    }

    function getData() public view returns (
        string memory firstName,
        string memory lastName,
        uint256 birthYear,
        string memory nationality,
        string memory postalAddress
    ) {
        Person memory person = persons[msg.sender];
        return (
            person.firstName,
            person.lastName,
            person.birthYear,
            person.nationality,
            person.postalAddress
        );
    }
}

