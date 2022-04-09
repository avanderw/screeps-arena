import { getObjectsByPrototype } from 'game/utils';
import { Creep } from 'game/prototypes';
import {  } from 'game/constants';
import { Flag } from 'arena';

export function loop() {
    var enemyFlag = getObjectsByPrototype(Flag).find(object => !object.my);
    var myCreeps = getObjectsByPrototype(Creep).filter(object => object.my);
    for(var creep of myCreeps) {
        creep.moveTo(enemyFlag!);
    }
}