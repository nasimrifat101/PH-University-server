

export type Guardian={
    fatherName: string;
    fatherOccupation: string;
    fatherContactNumber: string;
    motherName: string;
    motherOccupation: string;
    motherContactNumber: string;
    address: string;
}

export type LocalGuardian ={
    name: string;
    occupation: string;
    contactNumber: string;
    address: string;
}

export type UserName={
    firstName: string;
    middleName: string;
    lastName: string;
}

export type student = {
    id: string;
    name: UserName;
    gender: 'male' | "female";
    email: string;
    dateOfBirth?: string;
    contactNumber: string;
    emergencyContactNumber: string;
    presentAddress: string;
    permanentAddress: string;
    bloodGroup?: "A+" | "A-"| "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-";
    guardian: Guardian;
    localGuardian: LocalGuardian;
    profileImg?: string;
    isActive: 'active' | 'block'
}