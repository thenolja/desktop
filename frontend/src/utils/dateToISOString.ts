const changeDateFormatToIsoSTring = (date: Date = new Date()) => new Date(date).toISOString().split('T')[0];

export default changeDateFormatToIsoSTring;
