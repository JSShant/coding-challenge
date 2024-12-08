import { Container, Row, Col, Card } from "react-bootstrap";
import { DataObject } from "../utils/types";
import {
  calculateExpenses,
  calculateGrossProfitMargin,
  calculateNetProfitMargin,
  calculateRevenue,
  calculateWorkingCapitalRatio,
} from "../utils/calculations";
import { formatCurrency, formatPercentage } from "../utils/formatters";

export const FinancialAnalysis = ({ data }: { data: DataObject }) => {
  const revenue = calculateRevenue(data);
  const expenses = calculateExpenses(data);
  const grossProfitMargin = calculateGrossProfitMargin(data, revenue);
  const netProfitMargin = calculateNetProfitMargin(revenue, expenses);
  const workingCapitalRatio = calculateWorkingCapitalRatio(data);

  return (
    <Container className="financial-analysis py-5">
      <Row className="g-4">
        <Col md={6}>
          <Card className="h-100 shadow-sm">
            <Card.Body className="d-flex flex-column">
              <Card.Title className="border-bottom pb-2 mb-3">
                Revenue
              </Card.Title>
              <Card.Text className="text-primary fs-2 mt-auto text-center">
                {`${formatCurrency(revenue)}`}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="h-100 shadow-sm">
            <Card.Body className="d-flex flex-column">
              <Card.Title className="border-bottom pb-2 mb-3">
                Expenses
              </Card.Title>
              <Card.Text className="text-danger fs-2 mt-auto text-center">
                {`${formatCurrency(expenses)}`}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="h-100 shadow-sm">
            <Card.Body className="d-flex flex-column">
              <Card.Title className="border-bottom pb-2 mb-3">
                Gross Profit Margin
              </Card.Title>
              <Card.Text className="text-success fs-2 mt-auto text-center">
                {`${formatPercentage(grossProfitMargin)}`}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="h-100 shadow-sm">
            <Card.Body className="d-flex flex-column">
              <Card.Title className="border-bottom pb-2 mb-3">
                Net Profit Margin
              </Card.Title>
              <Card.Text className="text-info fs-2 mt-auto text-center">
                {`${formatPercentage(netProfitMargin)}`}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="mx-auto">
          <Card className="h-100 shadow-sm">
            <Card.Body className="d-flex flex-column">
              <Card.Title className="border-bottom pb-2 mb-3">
                Working Capital Ratio
              </Card.Title>
              <Card.Text className="text-warning fs-2 mt-auto text-center">
                {`${workingCapitalRatio.toFixed(2)}`}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default FinancialAnalysis;
