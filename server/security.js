import {Staff} from '../both/collection/staff';
import {Item} from '../both/collection/item';
import {Manager} from '../both/collection/manager';
import {Contract} from '../both/collection/contract';
import {Company} from '../both/collection/company';

Staff.permit(['insert']).allowInClientCode();

Item.permit(['insert', 'update']).allowInClientCode();

Manager.permit(['insert']).allowInClientCode();

Contract.permit(['insert', 'update']).allowInClientCode();

Company.permit(['insert', 'update','remove']).allowInClientCode();
