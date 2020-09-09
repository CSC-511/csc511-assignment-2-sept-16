import Application from 'assignment-two-final/app';
import config from 'assignment-two-final/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
