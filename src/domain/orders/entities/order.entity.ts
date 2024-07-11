import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { OrderStatus } from "../enums/order-status.enum";
import { RegistryDates } from "src/auth/common/registry-dates.embedded";

@Entity()
export class Order {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'enum',
        enum: OrderStatus,
        default: OrderStatus.AWAITING_PAYMENT,
    })
    status: OrderStatus;

    @Column(() => RegistryDates, { prefix: false })
    registryDates: RegistryDates;
}
