import Application from 'assignment-2-final/app';
import config from 'assignment-2-final/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
