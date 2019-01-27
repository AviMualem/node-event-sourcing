import { expect } from 'chai';
import { MyEventHandler } from '../DomainEventsHandlers/TempEventHandler';
import { UserAggregate } from '../Aggregates/User';
import * as TypeMoq from 'typemoq';

describe('Unit testsing example', () => {
  it('should proove we can mock TS properly', async () => {
    const user = new UserAggregate();
    const myMock = TypeMoq.Mock.ofType<MyEventHandler>();

    // Typed mocking done with typemoq
    myMock.setup(x => x.Do()).returns(() => 'm0cked');

    // should return m0cked.
    const a = myMock.object.Do();
    const result = new MyEventHandler().InvokeHandler(user);

    // Assertion being made with Chai
    expect(user.address).equal('changed');
    expect(a).equal('m0cked');
    const baseUrl = 'http://localhost:3000/Test';
    const options = {
        uri: baseUrl ,
    };
    // const httpResult = await requestPromiseNative.get(options);
    // expect(httpResult).equal('ok');
    expect(1).equal(1);
  });
});

describe('Unit testsing example 2', () => {
  it('should proove we can mock TS properly 2', async () => {
    const user = new UserAggregate();
    const myMock = TypeMoq.Mock.ofType<MyEventHandler>();

    // Typed mocking done with typemoq
    myMock.setup(x => x.Do()).returns(() => 'm0cked');

    // should return m0cked.
    const a = myMock.object.Do();
    const result = new MyEventHandler().InvokeHandler(user);

    // Assertion being made with Chai
    expect(user.address).equal('changed');
    expect(a).equal('m0cked');
    const baseUrl = 'http://localhost:3000/Test';
    const options = {
        uri: baseUrl ,
    };
    // const httpResult = await requestPromiseNative.get(options);
    // expect(httpResult).equal('ok');
    expect(1).equal(1);
  });
});

describe('failed Unit testsing example 3', () => {
  it('should proove we can mock fail TS properly 3', async () => {
    const user = new UserAggregate();
    const myMock = TypeMoq.Mock.ofType<MyEventHandler>();

    // Typed mocking done with typemoq
    myMock.setup(x => x.Do()).returns(() => 'm0cked');

    // should return m0cked.
    const a = myMock.object.Do();
    const result = new MyEventHandler().InvokeHandler(user);

    // Assertion being made with Chai
    expect(user.address).equal('changed');
    expect(a).equal('m0cked');
    const baseUrl = 'http://localhost:3000/Test';
    const options = {
        uri: baseUrl ,
    };
    // const httpResult = await requestPromiseNative.get(options);
    // expect(httpResult).equal('ok');
    expect(1).equal(1);
  });
});