import { Request, Response } from 'express';
import {
	SIX_MONTHS_LABELS,
	ONE_YEAR_LABEL,
	TWO_YEARS_LABELS
} from '../assets/label';

export const sixMonthsTurnupRatioData = {
	labels: SIX_MONTHS_LABELS,
	datasets: [
		{
			backgroundColor: '#9BD0F5',
			data: [99, 98, 99, 97.5, 93, 81]
			// FIXME: create bug missing data for v1
			// data: [99, 98, 99, 97.5, 93, 95]
		}
	]
};

export const oneYearTurnupRatioData = {
	labels: ONE_YEAR_LABEL,
	datasets: [
		{
			backgroundColor: '#9BD0F5',
			data: [99, 98, 99, 97.5, 93, 95, 96, 94.99, 100, 100, 98, 99]
		}
	]
};

export const twoYearsTurnupRatioData = {
	labels: TWO_YEARS_LABELS,
	datasets: [
		{
			backgroundColor: '#9BD0F5',
			data: [
				99, 98, 99, 97.5, 93, 95, 96, 94.99, 100, 100, 98, 99, 99, 98,
				99, 97.5, 93, 95, 96, 94.99, 100, 100, 98, 99
			]
		}
	]
};

const mockBookingAndCheckin = {
	"data":{
	  "booking": [10, 20, 30, 40, 50, 60],
	  "checkin": [10, 20, 30, 40, 50, 60]
	}
  }

const getSixMonthsTurnupRatioData = (req: Request, res: Response) => {
	return res.json(sixMonthsTurnupRatioData);
};



const getOneYearTurnupRatioData = (req: Request, res: Response) => {
	return res.json(oneYearTurnupRatioData);
};

const getTwoYearsTurnupRatioData = (req: Request, res: Response) => {
	return res.json(twoYearsTurnupRatioData);
};

// TODO: adding new 

const getOneYearSeasonalBookingCheckInData = (req: Request, res: Response) => {
	return res.json(mockBookingAndCheckin);
  };

export {
	getSixMonthsTurnupRatioData,
	getOneYearTurnupRatioData,
	getTwoYearsTurnupRatioData,
	getOneYearSeasonalBookingCheckInData
};

