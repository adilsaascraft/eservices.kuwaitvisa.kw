export type LocalizedText = {
  en: string
  ar: string
}

export type VisaData = {
  certificateType: LocalizedText
  visaStatus: LocalizedText
  visaType: LocalizedText
  visaNumber: string
  nationality: LocalizedText
  passportNumber: string
  arabicName: string
  latinName: string
  companyName: LocalizedText
  expiryDate: string
}

export const visaDataMap: Record<string, VisaData> = {
  V7553311: {
    certificateType: {
      en: 'Private Sector Work Visa',
      ar: 'تأشيرة عمل للقطاع الخاص',
    },
    visaStatus: {
      en: 'APPROVED',
      ar: 'معتمدة',
    },
    visaType: {
      en: 'ELECTRONIC VISA',
      ar: 'تأشيرة إلكترونية',
    },
    visaNumber: '251252121',
    nationality: {
      en: 'India',
      ar: 'الهند',
    },
    passportNumber: 'V7553311',
    arabicName: 'عبدالعالم',
    latinName: 'ABDUL ALEEM',
    companyName: {
      en: 'Mulla Group',
      ar: 'مجموعة الملا',
    },
    expiryDate: '2026-03-30',
  },

  V7553312: {
    certificateType: {
      en: 'Private Sector Work Visa',
      ar: 'تأشيرة عمل للقطاع الخاص',
    },
    visaStatus: {
      en: 'APPROVED',
      ar: 'معتمدة',
    },
    visaType: {
      en: 'ELECTRONIC VISA',
      ar: 'تأشيرة إلكترونية',
    },
    visaNumber: '251252122',
    nationality: {
      en: 'India',
      ar: 'الهند',
    },
    passportNumber: 'V7553312',
    arabicName: 'عبدالملك',
    latinName: 'ABDUL MALIK',
    companyName: {
      en: 'Mulla Group',
      ar: 'مجموعة الملا',
    },
    expiryDate: '2026-04-15',
  },

  V7553313: {
    certificateType: {
      en: 'Private Sector Work Visa',
      ar: 'تأشيرة عمل للقطاع الخاص',
    },
    visaStatus: {
      en: 'APPROVED',
      ar: 'معتمدة',
    },
    visaType: {
      en: 'ELECTRONIC VISA',
      ar: 'تأشيرة إلكترونية',
    },
    visaNumber: '251252123',
    nationality: {
      en: 'India',
      ar: 'الهند',
    },
    passportNumber: 'V7553313',
    arabicName: 'عبدالفتاح',
    latinName: 'ABDUL FATTAH',
    companyName: {
      en: 'Mulla Group',
      ar: 'مجموعة الملا',
    },
    expiryDate: '2026-05-10',
  },

  V7553314: {
    certificateType: {
      en: 'Private Sector Work Visa',
      ar: 'تأشيرة عمل للقطاع الخاص',
    },
    visaStatus: {
      en: 'APPROVED',
      ar: 'معتمدة',
    },
    visaType: {
      en: 'TEACHING VISA',
      ar: 'تأشيرة تعليم',
    },
    visaNumber: '251252124',
    nationality: {
      en: 'India',
      ar: 'الهند',
    },
    passportNumber: 'V7553314',
    arabicName: 'عبدالمهيمن',
    latinName: 'ABDUL MOHAIMIN',
    companyName: {
      en: 'Mulla Group',
      ar: 'مجموعة الملا',
    },
    expiryDate: '2026-06-20',
  },
}

