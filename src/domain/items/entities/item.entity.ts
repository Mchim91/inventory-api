import { RegistryDates } from "src/auth/common/registry-dates.embedded";
import { Category } from "src/domain/categories/entities/category.entity";
import { PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from "typeorm";

export class Item {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column({ nullable: true })
  description: string;

  @Column({ type: 'decimal', precision: 6, scale: 2 })
  price: number;

  @Column(() => RegistryDates, { prefix: false })
  registryDates: RegistryDates;

  // @ManyToMany(() => Category, (category) => category.items)
  // @JoinTable({ name: 'product_to_category' })
  // categories: Category[];
}
