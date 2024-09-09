import { Record } from '@/app/dashboard/table/columns';
import { faker } from '@faker-js/faker';

export const generateFakeRecords = (count: number = 100): Record[] => {
    const records: Record[] = [];
  
    for (let i = 0; i < count; i++) {
      const record: Record = {
        id: faker.datatype.uuid(),
        submitTime: faker.date.past().toISOString(),
        getVisaTime: faker.date.past().toISOString(),
        ifIncludedCouple: faker.helpers.arrayElement(['Yes', 'No']),
        ifTogether: faker.helpers.arrayElement(['Yes', 'No']),
        major: faker.helpers.arrayElement(['Computer Science', 'Business', 'Engineering', 'Arts', 'Medicine']),
        majorType: faker.helpers.arrayElement(['STEM', 'Non-STEM']),
        educationLevel: faker.helpers.arrayElement(['Bachelor', 'Master', 'PhD']),
        schoolType: faker.helpers.arrayElement(['Public', 'Private']),
        submitPlace: faker.helpers.arrayElement(['USA', 'Canada', 'UK', 'Australia']),
      };
  
      records.push(record);
    }
  
    return records;
  };
  
  // 生成100条数据