"""empty message

Revision ID: 01e2ab14cf30
Revises: 909a6ac773ef
Create Date: 2023-08-15 10:50:41.239112

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '01e2ab14cf30'
down_revision = '909a6ac773ef'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('licores', schema=None) as batch_op:
        batch_op.drop_column('old')
        batch_op.drop_column('style')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('licores', schema=None) as batch_op:
        batch_op.add_column(sa.Column('style', sa.VARCHAR(length=50), autoincrement=False, nullable=False))
        batch_op.add_column(sa.Column('old', sa.VARCHAR(length=50), autoincrement=False, nullable=False))

    # ### end Alembic commands ###
