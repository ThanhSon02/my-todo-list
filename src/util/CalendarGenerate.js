import dayjs from 'dayjs';

export const generateDate = (month = dayjs().month(), year = dayjs().year()) => {
    return {
        month: dayjs().month(), 
        year: dayjs().year()
    };
};
