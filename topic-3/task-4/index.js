/** Задача 4 - Класс Organaizer
Требуется написать класс органайзера - Organaizer, который содержит:
	4.1. Поле встреч — meetings (массив объектов класса Meeting)
	4.2. Поле отпусков — vacations (массив объектов класса Vacation)
@constructor
@this {Organaizer}
@param {Array<Meeting>} meetings - Массив встреч
@param {Array<Vacation>} vacations - Массив отпусков
 */

const { Meeting } = require("../task-2");
const { Vacation } = require("../task-3");

function Organaizer(meetings = [], vacations = []){ 
    if(!Array.isArray(meetings) || !Array.isArray(vacations) 
    ||meetings.some(x => !(x instanceof Meeting)) || meetings.some(x => !(x instanceof Vacation))){
        throw new UserException("Invalid Array");
    };
    this.meetings = meetings;
    this.vacations = vacations;
};

module.exports.Organaizer = Organaizer;