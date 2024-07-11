import { Exclude } from "class-transformer";
import { RegistryDates } from "src/auth/common/registry-dates.embedded";
import { Role } from "src/auth/enums/role.enum";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ unique: true })
    email: string;

    @Column()
    @Exclude()
    password: string;

    @Column({
        type: 'enum',
        enum: Role,
        enumName: 'role_enum',
        default: Role.USER,
    })
    role: Role;

    @Column(() => RegistryDates, { prefix: false })
    registryDates: RegistryDates;

    get isDeleted() {
        return !!this.registryDates.deletedAt;
    }
}
