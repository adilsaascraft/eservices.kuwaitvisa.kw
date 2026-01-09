export type VisaData = {
  certificateType: string
  visaStatus: string
  visaType: string
  visaNumber: string
  nationality: string
  passportNumber: string
  arabicName: string
  latinName: string
  companyName: string
  expiryDate: string
}

export const visaDataMap: Record<string, VisaData> = {
  V7553311: {
    certificateType: 'Private Sector Work Visa',
    visaStatus: 'APPROVED',
    visaType: 'ELECTRONIC VISA',
    visaNumber: '251252121',
    nationality: 'India',
    passportNumber: 'V7553311',
    arabicName: 'Abdul-Alam',
    latinName: 'ABDUL ALEEM',
    companyName: 'Mulla Group',
    expiryDate: '2026-03-30',
  },

  V7553312: {
    certificateType: 'Private Sector Work Visa',
    visaStatus: 'APPROVED',
    visaType: 'ELECTRONIC VISA',
    visaNumber: '251252122',
    nationality: 'India',
    passportNumber: 'V7553312',
    arabicName: 'Abdul-Malik',
    latinName: 'ABDUL MALIK',
    companyName: 'Mulla Group',
    expiryDate: '2026-04-15',
  },

  V7553313: {
    certificateType: 'Private Sector Work Visa',
    visaStatus: 'APPROVED',
    visaType: 'ELECTRONIC VISA',
    visaNumber: '251252123',
    nationality: 'India',
    passportNumber: 'V7553313',
    arabicName: 'Abdul-Fattah',
    latinName: 'ABDUL FATTAH',
    companyName: 'Mulla Group',
    expiryDate: '2026-05-10',
  },

  V7553314: {
    certificateType: 'Private Sector Work Visa',
    visaStatus: 'APPROVED',
    visaType: 'TEACHING VISA',
    visaNumber: '251252124',
    nationality: 'India',
    passportNumber: 'V7553314',
    arabicName: 'Abdul-Mohaimin',
    latinName: 'ABDUL MOHAIMIN',
    companyName: 'Mulla Group',
    expiryDate: '2026-06-20',
  },
}
