import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('should generate correct link', () => {
    const expectedLink = '/trip/abc';
    const expectedTags = ['tag1', 'tag2', 'tag3'];
    const component = shallow(<TripSummary tags={expectedTags} id='abc' image='image.jpg' name='image' days={7} cost='100' />);

    expect(component.find('.link').prop('to')).toEqual(expectedLink);
    console.log(component.debug());
  });

  it('should have correct src and alt', () => {
    const expectedImage = 'image.jpg';
    const expectedName = 'image';
    const expectedTags = ['tag1', 'tag2', 'tag3'];
    const component = shallow(<TripSummary tags={expectedTags} image={expectedImage} name={expectedName} />);

    expect(component.find('img').prop('src')).toEqual(expectedImage);
    expect(component.find('img').prop('alt')).toEqual(expectedName);
  });

  it('should render props name, cost, days', () => {
    const expectedName = 'image';
    const expectedCost = '100';
    const expectedDays = 7;
    const expectedTags = ['tag1', 'tag2', 'tag3'];
    const component = shallow(<TripSummary tags={expectedTags} name={expectedName} days={expectedDays} cost={expectedCost} />);

    const renderedName = component.find('.title').text();
    expect(renderedName).toEqual(expectedName);
    const renderedDaysAndCost = component.find('.details').text();
    expect(renderedDaysAndCost).toEqual(`${expectedDays} daysfrom ${expectedCost}`);
  });

  it('shoult throw error without props', () => {
    expect(() => shallow(<TripSummary />)).toThrow();
  });

  it('should render tags in order', () => {
    const expectedTags = ['tag1', 'tag2', 'tag3'];
    const component = shallow(<TripSummary tags={expectedTags} />);

    expect(component.find('.tags span').at(0).text()).toEqual(expectedTags[0]);
    expect(component.find('.tags span').at(1).text()).toEqual(expectedTags[1]);
    expect(component.find('.tags span').at(2).text()).toEqual(expectedTags[2]);
  });

  it('should not render div if tags is false', () => {
    const expectedTags = ['tag1', 'tag2', 'tag3'];
    const component = shallow(<TripSummary tags={expectedTags} />);

    expect(component.find('.tags').isEmpty()).toEqual(false);
  });
});
