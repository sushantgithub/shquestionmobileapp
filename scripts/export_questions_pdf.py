import json
import re
from pathlib import Path
from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import mm
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, PageBreak, KeepTogether

source = Path("src/data/questions.ts").read_text(encoding="utf-8")
match = re.search(r"export const QUESTIONS: Question\[\] = (\[.*?\]);\s*export const QUESTION_COUNT", source, re.S)
if not match:
    raise SystemExit("Could not locate QUESTIONS array")
questions = json.loads(match.group(1))
if len(questions) != 270:
    raise SystemExit(f"Expected 270 questions, found {len(questions)}")

out = Path("CPMAI-270-Practice-Questions-with-Answers.pdf")
styles = getSampleStyleSheet()
styles.add(ParagraphStyle(name="CoverTitle", parent=styles["Title"], fontName="Helvetica-Bold", fontSize=22, leading=27, alignment=TA_CENTER, textColor=colors.HexColor("#15324b"), spaceAfter=12))
styles.add(ParagraphStyle(name="CoverSub", parent=styles["Normal"], fontSize=11, leading=16, alignment=TA_CENTER, textColor=colors.HexColor("#526575")))
styles.add(ParagraphStyle(name="QHead", parent=styles["Heading2"], fontSize=11, leading=14, textColor=colors.HexColor("#176b59"), spaceBefore=10, spaceAfter=5))
styles.add(ParagraphStyle(name="BodyQ", parent=styles["BodyText"], fontSize=9, leading=13, spaceAfter=6))
styles.add(ParagraphStyle(name="Option", parent=styles["BodyText"], fontSize=8.7, leading=12, leftIndent=12, spaceAfter=3))
styles.add(ParagraphStyle(name="Answer", parent=styles["BodyText"], fontSize=8.7, leading=12, textColor=colors.HexColor("#145c43"), spaceBefore=5, spaceAfter=3))
styles.add(ParagraphStyle(name="Explain", parent=styles["BodyText"], fontSize=8.3, leading=11.5, spaceAfter=7))
styles.add(ParagraphStyle(name="SmallNote", parent=styles["BodyText"], fontSize=8, leading=11, textColor=colors.HexColor("#596875")))

def esc(s):
    return str(s).replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;").replace("\n", "<br/>")

story = [
    Spacer(1, 42*mm),
    Paragraph("CPMAI Practice Question Bank", styles["CoverTitle"]),
    Paragraph("All 270 Questions • Multiple-choice options • Correct answers • Explanations", styles["CoverSub"]),
    Spacer(1, 10*mm),
    Paragraph("Compiled from the SH Question Quiz question bank. Use this document for personal study and revision.", styles["CoverSub"]),
    Spacer(1, 7*mm),
    Paragraph("The questions are presented as supplied in the app. Correct answers and explanations follow each question.", styles["SmallNote"]),
    PageBreak()
]
for i, q in enumerate(questions, 1):
    block = [Paragraph(f"Question {i}", styles["QHead"]), Paragraph(esc(q["question"]), styles["BodyQ"])]
    for key in ["A", "B", "C", "D"]:
        block.append(Paragraph(f"<b>{key}.</b> {esc(q['options'][key])}", styles["Option"]))
    correct = q.get("correct", "")
    block.append(Paragraph(f"<b>Correct answer: {esc(correct)} — {esc(q['options'].get(correct, ''))}</b>", styles["Answer"]))
    explanation = q.get("correctExplanation", "")
    if explanation:
        block.append(Paragraph(f"<b>Explanation:</b> {esc(explanation)}", styles["Explain"]))
    story.append(KeepTogether(block))

def footer(canvas, doc):
    canvas.saveState()
    canvas.setFont("Helvetica", 8)
    canvas.setFillColor(colors.HexColor("#667788"))
    canvas.drawString(18*mm, 12*mm, "CPMAI Practice Question Bank • 270 questions")
    canvas.drawRightString(A4[0]-18*mm, 12*mm, f"Page {doc.page}")
    canvas.restoreState()

doc = SimpleDocTemplate(str(out), pagesize=A4, rightMargin=18*mm, leftMargin=18*mm, topMargin=17*mm, bottomMargin=20*mm, title="CPMAI Practice Question Bank - 270 Questions", author="SH Question Quiz")
doc.build(story, onFirstPage=footer, onLaterPages=footer)
print(f"Created {out} with {len(questions)} questions")
