import { Repository } from 'typeorm';
import { Board } from './board.entity';
import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';

// @EntityRepository(Board)
// export class BoardRepository extends Repository<Board> {}

@Injectable()
export class BoardRepository extends Repository<Board> {
  constructor(dataSource: DataSource) {
    super(Board, dataSource.createEntityManager());
  }
}
