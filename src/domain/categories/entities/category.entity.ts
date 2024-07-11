import { RegistryDates } from "src/auth/common/registry-dates.embedded";
import { Item } from "src/domain/items/entities/item.entity";
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Category {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    name: string;

    @Column()
    description: string;

    @Column(() => RegistryDates, { prefix: false })
    registryDates: RegistryDates;

    // @ManyToMany(() => Item, (item) => item.categories)
    // items: Item[]
}
