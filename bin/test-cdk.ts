#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { TestCdkStack } from '../lib/test-cdk-stack';

const app = new cdk.App();
new TestCdkStack(app, 'TestCdkStack', {});